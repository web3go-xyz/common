
import { Injectable } from '@nestjs/common';
import { Job } from 'bull';
import { MyLogger } from './../log/logger.service';
const fetch = require('node-fetch');
@Injectable()
export class TaskConsumerBase {
  public async reportResult(
    taskId: string,
    taskType: string,
    reportResultEndPoint: string,
    result: any,
  ) {
    var promise = new Promise(function (resolve, reject) {
      const url = reportResultEndPoint;
      const params = { taskId: taskId, taskType: taskType, data: result };
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      };

      fetch(url, options)
        .then((res) => {
          if (res.ok) {
            return res;
          } else {
            reject('report result to task server failed:' + res.statusText);
          }
        })
        .then((res) => res.json())
        .then((t) => {
          MyLogger.log('result-' + taskId + '-' + taskType + '\t' + JSON.stringify(t));
          if (t.result == 'ok') {
            resolve(t);
          } else {
            reject('report result to task server failed with result:' + t.result);
          }
        })
        .catch((error) => {
          MyLogger.error('fetch caught error:' + error.message);
          reject('report result to task server failed with error:' + error.message);
        });
      ;
    });
    return promise;
  }

  public async catchReportResultError(error: any, job: Job<any>) {
    MyLogger.error('stop the task consumer, caught error when reportResult, error: ' + error);

    await job.log(error);
    let errorInfo = { message: error };
    let ignoreLock = true;
    await job.moveToFailed(errorInfo, ignoreLock);
  }
}
