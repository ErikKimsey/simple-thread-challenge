

class Project {
  constructor(projNumber, begin, end, cityType, set) {
    this.id = projNumber;
    this.begin = begin;
    this.end = end;
    this.totalDays = -1;
    this.cityType = cityType;
    this.set = set;


    this.dates = [];
    this.travelDaysCnt = 0;
    this.FullDaysCnt = 0;
    this.reimbursement = 0;
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