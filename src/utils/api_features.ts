class ApiFeatures {
  mongooseQuery: any
  queryString: any
  paginationResults: any
  constructor(mongooseQuery: any, queryString: any) {
    this.mongooseQuery = mongooseQuery
    this.queryString = queryString
  }
  filter() {
    //1) Filtering
    const queryStringObject = { ...this.queryString }
    const excludesFields = ['page', 'sort', 'limit', 'fields']
    //To remove main fields from the query string object and keep filter data for finding
    excludesFields.forEach((field) => {
      delete queryStringObject[field]
    })
    //============== Apply Filtering using [gte,gt,lte,lt] ============================
    //1- Convert QueryObject to String
    let queryString = JSON.stringify(queryStringObject)
    //2- Add dolar sign
    queryString = queryString.replace(
      /\b(gte|gt|lte|lt)\b/g,
      (match) => `$${match}`
    )
    this.mongooseQuery = this.mongooseQuery.find(JSON.parse(queryString))
    return this
  }
  sort() {
    //3) Sorting
    /*
    ========= Description for how to use =========
    in Query add:
    ex:
    To Sort From Low to High : sort=price
    To Sort From High to Low : sort=-price
    To Sort with two properties : price, -sold
    ==============================================
    */
    if (this.queryString.sort) {
      //To Handle sorting with multiple properties
      const SortBy = this.queryString.sort.split(',').join(' ')
      this.mongooseQuery = this.mongooseQuery.sort(SortBy)
    } else {
      //To get the newest products
      this.mongooseQuery = this.mongooseQuery.sort('-createdAt')
    }
    return this
  }
  limit() {
    //4) Fields limit
    /*
    ========= Description for how to use =========
    in Query add:
    ex:
    To Select field : fields=title
    To Select multiple fields : fields=title,price
    ==============================================
    */

    if (this.queryString.fields) {
      //To Handle sorting with multiple properties
      const selectBy = this.queryString.fields.split(',').join(' ')
      this.mongooseQuery = this.mongooseQuery.select(selectBy)
    } else {
      this.mongooseQuery = this.mongooseQuery.select('-__v')
    }
    return this
  }
  search(modelName: any) {
    if (this.queryString.keyword) {
      let query: any = {}

      if (modelName === 'Product') {
        query.$or = [
          { title: { $regex: this.queryString.keyword, $options: 'i' } },
          { description: { $regex: this.queryString.keyword, $options: 'i' } },
        ]
      } else {
        query = { name: { $regex: this.queryString.keyword, $options: 'i' } }
      }

      this.mongooseQuery = this.mongooseQuery.find(query)
    }
    return this
  }
  paginate(countDocuments: any) {
    //2) Pagination
    const page = this.queryString.page * 1 || 1
    const limit = this.queryString.limit * 1 || 5
    const skip = (page - 1) * limit
    const endIndex = page * limit
    //Pagination results
    const pagination: any = {}
    pagination.cuurentPage = page
    pagination.limit = limit
    pagination.totalPages = Math.ceil(countDocuments / limit)
    //Next Page
    if (endIndex < countDocuments) {
      pagination.nextPage = page + 1
    }
    //Previous Page
    if (skip > 0) {
      pagination.prevPage = page - 1
    }
    this.mongooseQuery = this.mongooseQuery.limit(limit).skip(skip)
    this.paginationResults = pagination
    return this
  }
}
