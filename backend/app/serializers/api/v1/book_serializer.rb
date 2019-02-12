class Api::V1::BookSerializer < ActiveModel::Serializer
  attributes :id, :isbn, :title, :created_at
end
