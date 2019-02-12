# frozen_string_literal: true
module ApiConcerns
  module ResponseHandler
    extend ActiveSupport::Concern

    def render_response(resource)
      if resource.errors.empty?
        render json: resource
      else
        unprocessable_entity(resource.errors)
      end
    end

    def render_404(exception)
      render json: {
        errors:
          {
            'messages': [exception]
          }
      }, status: 404
    end

    def unprocessable_entity(message = nil)
      render json: {
        errors:
          {
            'messages': message.full_messages || ['Unprocessable Entity']
          }
      }, status: 422
    end

    def not_authorized
      render json: {
        errors:
          {
            'messages': ['You are not authorized to perform this action']
          }
      }, status: 403
    end

    def render_400(message)
      render json: {
        errors:
          {
            'messages': [message]
          }
      }, status: 400
    end
  end
end
