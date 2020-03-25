class PostsController < ApplicationController

    def index
        @posts = Post.all
        render json: @posts
    end
    
    def new
        @post = Post.new
        render json: @post
    end

    def create 
        @post = Post.create(post_params)
        render json: @post
    end

    private

    def post_params
        params.permit(:user_id, :img_url, :description)
    end

end
