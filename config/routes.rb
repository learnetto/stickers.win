Rails.application.routes.draw do
  root to: 'store#index'
  resources :charges
end
