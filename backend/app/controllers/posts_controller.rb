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

    def update
        @post = Post.find(params[:id])
        @post.update(post_params)
        render json: @post
    end

    def destroy
        @post = Post.find(params[:id])
        @post.destroy
        @posts = Post.all
        render json: @posts
    end

    private

    def post_params
        params.permit(:user_id, :img_url, :description, :likes)
    end

end
