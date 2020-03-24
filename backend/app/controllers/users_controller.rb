class UsersController < ApplicationController
    before_action :authorized, only: [:persist]

    def persist
        info = {user_id: @user.id}
        token = encode_token(info)
        render json: {user: UserSerializer.new(@user), token: token}
    end

    def index 
        @users = User.all
        render json: @users
    end

    def create
        @user = User.create(user_params)
        if @user.valid?
            info = {user_id: @user.id}
            token = encode_token(info)
            render json: {user: UserSerializer.new(@user), token: token}
        else
            render json: {error: @user.errors.full_messages}
        end
    end

    def login
        @user = User.find_by(username: params[:username])
        if @user && @user.authenticate(params[:password])
            info = {user_id: @user.id}
            token = encode_token(info)
            render json: {user: UserSerializer.new(@user), token: token}
        else
            render json: {error: "Incorrect username or password"}
        end
    end

    private

    def user_params
        params.permit(:username, :password, :name, :avatar)
    end

end
