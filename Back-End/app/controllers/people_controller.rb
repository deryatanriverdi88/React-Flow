class PeopleController < ApplicationController
    def index
        @people = Person.all
        render json: @people
    end

    def create
        @person = Person.create(person_params)
        render json: @person
    end

    def destroy
        @person = Person.find(params[:id])
        @person.destroy
    end


    private
    def person_params
        params.require(:person).permit(:name, :img_url, :bio)
    end
end
