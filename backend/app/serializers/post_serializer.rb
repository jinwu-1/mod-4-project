class PostSerializer < ActiveModel::Serializer
  attributes :id, :img_url, :description
  has_one :user
end
