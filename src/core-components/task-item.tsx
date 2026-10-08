import React, { useState } from "react";
import ButtonIcon from "../components/button-Icon";
import Card from "../components/card";
import InputCheckbox from "../components/input-checkbox";
import Text from "../components/text";
import TrashIcon from "../assets/icons/Trash-Regular.svg?react";
import Pencil from "../assets/icons/Pencil.svg?react";
import InputText from "../components/input-text";
import Check from "../assets/icons/Check.svg?react"
import Xicon from "../assets/icons/X.svg?react"
import { TaskState, type Task } from "../models/task";
import { cx } from "class-variance-authority";
import useTask from "../hooks/use-task";

interface TaskItemsProps{
    task: Task;
}

export default function TaskItem({task}: TaskItemsProps) {

    const [isEditing, setIsEditing] = React.useState(task?.state === TaskState.Creating);

    const [taskTitle, setTaskTitle] = useState(task.title || "");

    const {updateTask, updateStateTask, deleteTask} = useTask();

    function handleEditTask(){
        setIsEditing(true)
    }

    function handleExitEditTask(){
        if (task.state === TaskState.Creating) {
            deleteTask(task.id)
        }
        
        setIsEditing(false)
    }

    function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>){
        setTaskTitle(e.target.value || "");
    }

    function handleSaveTask(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()

        updateTask(task.id, {title: taskTitle})

        setIsEditing(false);
    }

    function handleChangeTaskStatus(e: React.ChangeEvent<HTMLInputElement>){
        const checked = e.target.checked

        updateStateTask(task.id, checked)
    }

    function handleDeleteTask(){
        deleteTask(task.id)
    }

    return (
        
        <Card size="md" >
        {!isEditing ? (
            <div className="flex items-center gap-4">
                    <InputCheckbox checked={task?.concluded} onChange={handleChangeTaskStatus} />
                    <Text className={cx("flex-1",{
                        "line-through": task?.concluded,
                    }
                    )}>{task?.title}</Text>
                    <div className="flex gap-1">
                        <ButtonIcon icon={TrashIcon} variant={"tertiary"} onClick={handleDeleteTask}></ButtonIcon>
                        <ButtonIcon onClick={handleEditTask} icon={Pencil} variant={"tertiary"}></ButtonIcon>
                    </div>
                
            </div>
        ):
        (
            <form onSubmit={handleSaveTask} className="flex items-center gap-4">
                <InputText value={taskTitle} className="flex-1" onChange={handleChangeTaskTitle} required autoFocus/>
                <div className=" flex gap-1">
                    <ButtonIcon icon={Xicon} variant={"secondary"} onClick={handleExitEditTask}></ButtonIcon>
                    <ButtonIcon type="submit" icon={Check} variant={"primary"}></ButtonIcon>
                </div>
            </form>
        )
        }
        </Card>
        
    )
}