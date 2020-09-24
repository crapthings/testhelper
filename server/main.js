console.time()
Activities.find({}, { limit: 1000 }).fetch()
console.timeEnd()
