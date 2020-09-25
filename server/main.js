// console.time()
// Activities.find({}, { limit: 100000 }).fetch()
// console.timeEnd()

(async function () {
  console.time('meteor')
  Activities.find({}).fetch()
  console.timeEnd('meteor')

  console.time('raw')
  // console.log(await Activities.rawCollection().find().toArray())
  await Activities.rawCollection().find().toArray()
  console.timeEnd('raw')
})()
