class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :username
  belongs_to :user
  belongs_to :post
end
