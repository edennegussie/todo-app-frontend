import { render, screen } from "@testing-library/react";
import TaskItem from "./TaskItem";

describe("TaskItem Component", () => {
    const mockTask = {
        id: 1,
        title: "Sample Task",
        status: "TODO",
        due_date: "2025-02-10T00:00:00Z",
        description: "This is a sample task description",
    };

    test("renders task details correctly", () => {
        render(<TaskItem task={mockTask} />);

        expect(screen.getByText("Sample Task")).toBeInTheDocument();
        expect(screen.getByText("To Do")).toBeInTheDocument();
        expect(screen.getByText("Due Date")).toBeInTheDocument();
        expect(screen.getByText("Mon Feb 10 2025")).toBeInTheDocument();
        expect(screen.getByText("Description")).toBeInTheDocument();
        expect(screen.getByText("This is a sample task description")).toBeInTheDocument();
    });

    test("renders status dropdown with correct options", () => {
        render(<TaskItem task={mockTask} />);

        // Get the select dropdown
        const selectElement = screen.getByRole("combobox");
        expect(selectElement).toBeInTheDocument();

        // Check if the dropdown contains the three options
        expect(screen.getByRole("option", { name: "To Do" })).toBeInTheDocument();
        expect(screen.getByRole("option", { name: "In Progress" })).toBeInTheDocument();
        expect(screen.getByRole("option", { name: "Completed" })).toBeInTheDocument();
    });

});
