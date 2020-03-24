Rails.application.routes.draw do
  resources :comments
  resources :posts, only: [:index, :create]
  resources :users, only: [:index, :create]
  post '/login', to: 'users#login'
  get '/persist', to: 'users#persist'
end
