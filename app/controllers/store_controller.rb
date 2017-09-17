class StoreController < ApplicationController
  def index
    @products = Stripe::Product.list.to_json
  end
end
