class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :post

  validates_presence_of :text, :user_id, :post_id

  def username
    self.user.username
  end

  def avatar
    self.user.avatar
  end

end
