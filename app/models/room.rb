class Room < ApplicationRecord
  belongs_to :user

  validates presence [:topic, :user_id]
end
