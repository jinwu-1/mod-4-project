class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :avatar
  has_many :posts
  has_many :comments
end
