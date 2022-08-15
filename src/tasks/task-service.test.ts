import * as taskService from "./tasks-service";
describe('TaskService', () => {
    beforeEach(() =>{
        jest.resetAllMocks();
    });

    describe('TaskService.__getTaskDetail', ()=> {
        it('should return task detail', async () => {
            //follow AAA pattern 

            // Arrange 
            const taskId = 1; 
            const mockedResult = {
                "id": 1,
                "name": "buy a mercedes amg GT63ssss",
                "description": "best can in the world",
                "isDueDate": false,
                "date": "22-12-2011"
            };

            jest.fn().mockReturnValue(mockedResult);


            // act 
            const result = await taskService.findTaskById(taskId); 


            // assert 
            expect(result).toEqual(mockedResult);
            
        })
    })
})