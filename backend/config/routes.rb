Rails.application.routes.draw do
  resources :comments
  resources :posts, only: [:index, :new, :create, :destroy]
  resources :users, only: [:create]
  post '/login', to: 'users#login'
  get '/persist', to: 'users#persist'
end
