import { Schema, model } from 'mongoose'

const auditSchema = new Schema({
  entity: {
    type: String,
    required: true,
    maxlength: 15
  },
  http_method: {
    type: String,
    required: true,
    maxlength: 10
  },
  request: {
    type: Object,
    required: true
  },
  response: {
    type: Object,
    required: true
  },
  status_code: {
    type: Number,
    required: true
  },
  status_description: {
    type: String,
    required: true,
    maxlength: 20
  },
  date_operation: {
    type: Date,
    default: Date.now
  },
  username: {
    type: String,
    required: true,
    maxlength: 20
  },
  user_id: {
    type: Number,
    required: true
  }
}, {
  versionKey: false
})

export default model('Audit', auditSchema)