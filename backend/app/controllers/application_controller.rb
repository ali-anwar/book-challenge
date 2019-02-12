class ApplicationController < ActionController::API
  include ApiConcerns::ResponseHandler
  include ApiConcerns::ExceptionHandler
end
