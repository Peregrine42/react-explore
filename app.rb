require 'sinatra'
require 'json'
require 'active_record'
require "sinatra/activerecord"

#ActiveRecord::Base.logger = nil
#disable :logging

class Comment < ActiveRecord::Base

end

get '/' do
  erb :template
end

get '/bacon' do
  erb :bacon
end

get '/comment-data' do
  Comment.all.to_json
end

post '/comment-data' do
  Comment.create(params)
  Comment.all.to_json
end
