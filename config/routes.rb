Rails.application.routes.draw do
  root to: 'static_pages#index'

  resources :static_pages, only: [], path: '' do
    collection do
      get 'index'
      get 'show_ror_widget'
      post 'weather_report'
    end
  end
end
