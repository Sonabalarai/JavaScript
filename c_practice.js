// let dsd_mark=80;
// let am_mark=60;
// let ds_mark=70;
// let apst_mark=80;
// let oose_mark=50;
let count = 0;
function countPassStudent(n, dsd_mark, am_mark, ds_mark, apst_mark, oose_mark) {
  for (i = 1; i <= n; i++) {
    // console.log(
    //   "enter the different subject's marks of student roll number %d\n",
    //   i
    // );

    if (
      dsd_mark >= 50 &&
      am_mark >= 50 &&
      ds_mark >= 50 &&
      oose_mark >= 50 &&
      apst_mark >= 50
    ) {
      console.log("pass\n");

      count++;
    } else {
      console.log("fail");
    }
  }
  console.log("pass students number is %d\n", count);
}

// countPassStudent(3, 60, 70, 80, 90, 50);
countPassStudent(2, 40, 70, 80, 90, 50);
countPassStudent(1, 60, 70, 80, 90, 50);
