/**
 * 
 * Rules:
 * 
 * 
 */

// -- get data from project_data
// -- convert date 
// -- count numver of project dates
// -- set count to Project instance
// -- set dates to Project.days[]
// -- set cityCost to Project.cost
// ----- if(count <= 2) :: 
// --------- 


// ========================================================================
// ========================================================================

const HIGH_CITY_FULL_DAY = 85;
const LOW_CITY_FULL_DAY = 75;
const HIGH_CITY_TRAVEL = 55;
const LOW_CITY_TRAVEL = 45;

class Project {
  constructor(projNumber, begin, end, totalDays, cityCost) {
    this.projectId = projNumber;
    this.begin = begin;
    this.end = end;
    this.totalDays = totalDays;
    this.cost = cityCost;
    this.days = [];
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
  constructor() {
    this.projects = [];
    this.totalSetReimbursementAmnt = 0;
  }
}
