##
# The controller for the planning poker rooms
class RoomsController < ApplicationController
  before_action :authenticate_user, only: [:create, :show, :new]

  ##
  # Lists all planning poker active rooms
  def index
    @new_room_path = new_room_path
    @rooms = Room.all
  end

  ##
  # Displays a planning poker active game room
  def show
  end

  ##
  # Endpoint for creating a new game room and saving it to the DB
  def create
    @room = Room.new(room_params)
    if @room.save
      return redirect_to root_path
    else
      flash[:error] = @room.errors.full_messages
      return redirect_to new_room_path
    end
  end

  ##
  # Handles creating a new game room
  def new
    @create_url = rooms_path
    @room = Room.new
  end

  ##
  # Handles editing a game room
  def edit
  end

  ##
  # Endpoint for updating a plannig rooom
  def update
  end

  ##
  # Endpoint for deleting aplanning room
  def destroy
  end

  private

  def set_room
  end

  def room_params
    params.permit(:title, :user_id)
  end
end