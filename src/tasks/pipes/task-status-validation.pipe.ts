// import { BadRequestException, PipeTransform } from '@nestjs/common';
// import { TaskStatus } from '../task.model';

// // Creating a custom pipe.
// export class TaskStatusValidationPipe implements PipeTransform {
//   readonly allowedStatuses: [
//     TaskStatus.OPEN,
//     TaskStatus.DONE,
//     TaskStatus.IN_PROGRESS,
//   ];

//   private isStatusValid(status: any) {
//     const index = this.allowedStatuses.indexOf(status);
//     return index !== -1;
//   }

//   transform(value: any) {
//     // value = value.toUpperCase();

//     if (!this.isStatusValid(value)) {
//       throw new BadRequestException(`"${value}" is not a valid status`);
//     }
//     return value;

// }
// }
