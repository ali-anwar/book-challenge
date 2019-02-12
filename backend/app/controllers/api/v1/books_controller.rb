class Api::V1::BooksController < ApplicationController
  before_action :set_book, only: %i[show update destroy]

  def index
    @books = Book.all

    render json: @books
  end

  def show
    render json: @book
  end

  def create
    book = Book.new(book_params)
    book.save

    render_response(book)
  end

  def update
    @book.update(book_params)
    render_response(@book)
  end

  def destroy
    @book.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_book
      @book = Book.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def book_params
      params.require(:book).permit(:isbn, :title, :notes)
    end
end
