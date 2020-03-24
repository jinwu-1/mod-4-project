class UserSerializer < ActiveModel::Serializer
  attributes :username, :name, :avatar
  has_many :posts
  has_many :comments
end
