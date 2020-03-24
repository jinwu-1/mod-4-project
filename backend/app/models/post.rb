class Post < ApplicationRecord
  belongs_to :user

  validates_presence_of :img_url, :user_id
end
