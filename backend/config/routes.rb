Rails.application.routes.draw do
  resources :comments
  resources :posts, only: [:index]

  resources :users, only: [:index, :create]
  get '/login', to: 'users#login'
  get '/persist', to: 'users#persist'
end
