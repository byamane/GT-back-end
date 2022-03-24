import mongoose, { Schema } from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new mongoose.Schema({
  email: {type: String, required: true, lowercase: true, unique: true},
  name: String,
  avatar: String,
  projects: [{type: Schema.Types.ObjectId, ref: "Project"}]
},{
    timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export {Profile}
