

class Project {
  constructor(projNumber, begin, end, cityCost) {
    this.projectId = projNumber;
    this.begin = begin;
    this.end = end;
    this.totalDays = -1;
    this.cost = cityCost;
    this.dates = [];
    this.travelDaysCnt = -1;
    this.FullDaysCnt = -1;
    this.reimbursement = -1;
  }

  set setDaysArr(days) {
    this.days = days;
  }

  set setReimbursementAmt(amnt) {
    this.reimbursement = amnt;
  }
}

class Set {
  constructor(id, projects) {
    this.id = id;
    this.projects = [];
    this.totalSetReimbursementAmnt = 0;
  }

  createProjects() {

  }
}

export { Project, Set }