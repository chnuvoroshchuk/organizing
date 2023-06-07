interface TaskInterface {
  id: number;
  description: string;
  title: string;
  status: string;
  type: string;
  duration: Date;
  canEdit: boolean;
  repeat: boolean;
}

enum TaskTypeEnum {
  DAILY = 'DAILY',
  WEEKLY = 'WEEKLY',
  MONTHLY = 'MONTHLY'
}
