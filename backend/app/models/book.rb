class Book < ApplicationRecord
  validates :isbn, presence: true
  validates :isbn, length: { in: 10..17 }
  validates :title, presence: true
end
