require 'rubygems'
require 'bundler/setup'
require 'sinatra'
require 'sinatra/base'
require 'coffee-script'
require 'sass/plugin/rack'
require './config'
require './helper'

class RandomSub < Sinatra::Base
  get '/' do
    haml :index
  end

  get '/application.js' do
    coffee :application
  end
end