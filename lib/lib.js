Activities = new Mongo.Collection('activities')

Activities.helpers({
  test() {
    console.log(this)
    return 1
  },
  test2() {
    console.log(this)
    return 1
  },
  test5() {
    console.log(this)
    return 1
  },
  test10() {
    console.log(this)
    return 1
  },
  test51() {
    console.log(this)
    return 1
  },
  test101() {
    console.log(this)
    return 1
  },
})
