class Api::V1::BookSerializer < ActiveModel::Serializer
  attributes :id, :isbn, :title, :notes, :created_at
end
