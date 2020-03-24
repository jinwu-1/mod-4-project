class PostSerializer < ActiveModel::Serializer
  attributes :id, :img_url, :description
  has_many :comments
  belongs_to :user
end
