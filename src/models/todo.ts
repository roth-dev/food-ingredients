
export class TodoModels {
  private id: undefined
  private user: any
  private title: string
  private description: string
  private finished: boolean
  constructor(
    user: any,
    title: string,
    description: string,
    finished: boolean = false,
    id: undefined = undefined) {
    this.user = user;
    this.title = title;
    this.description = description;
    this.finished = finished;
    this.id = id;
    // save function adds id property later
  }
}