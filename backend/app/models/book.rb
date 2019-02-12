class Book < ApplicationRecord
  validates :isbn, presence: { message: "ISBN can't be blank" }
  validates :isbn, length: { in: 10..17 }
  validates :title, presence: { message: "Title can't be blank" }
end
