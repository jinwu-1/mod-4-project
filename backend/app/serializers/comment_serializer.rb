class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :username, :avatar
  belongs_to :user
  belongs_to :post
end
