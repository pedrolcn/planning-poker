##
# The controller for the planning poker rooms
class RoomsControler < ApplicationController
  before_action :authenticate_user, only: [:create, :show]

  ##
  # Lists all planning poker active rooms
  def index
    @rooms = Rooms.all
  end

  ##
  # Displays a planning poker active game room
  def show
  end

  ##
  # Endpoint for creating a new game room and saving it to the DB
  def create
    @room = Room.create(room_params)
  end

  ##
  # Handles creating a new game room
  def new
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

  def rooms_params
    params.require(:room).permit(:topic, :user_id)
  end
end