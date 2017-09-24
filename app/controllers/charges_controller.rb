class ChargesController < ApplicationController
  def create
    items = []
    params[:cart][:items].each do |k, v|
      items << { :type => 'sku', :parent => k, :quantity => v }
    end
    order = Stripe::Order.create(
      :email => params[:email],
      :currency => 'usd',
      :items => items,
      :shipping => {
        :name => params[:card][:name],
        :address => {
          :city => params[:card][:address_city],
          :country => params[:card][:address_country],
          :line1  => params[:card][:address_line1],
          :line2 => params[:card][:address_line2],
          :state => params[:card][:address_state],
          :postal_code => params[:card][:address_zip]
        }
      }
    )

    token = params[:id]
    order.pay(:source => token)

    render json: {message: "Thanks for your purchase. Your stickers are on the way!"}
  rescue Stripe::CardError => e
    flash[:error] = e.message
    redirect_to :root
  end
end
