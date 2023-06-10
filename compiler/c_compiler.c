// This is the code for the C compiler

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(int argc, char *argv[]) {
    char command[1000];
    char output_file[1000];
    char input_file[1000];
    char *extension;
    int i;

    // Check if the correct number of arguments were passed
    if (argc != 2) {
        printf("Usage: c_compiler <input_file>\n");
        return 1;
    }

    // Get the input file name and extension
    strcpy(input_file, argv[1]);
    extension = strrchr(input_file, '.');

    // Check if the input file has a .c extension
    if (extension == NULL || strcmp(extension, ".c") != 0) {
        printf("Error: Input file must have a .c extension\n");
        return 1;
    }

    // Generate the output file name
    strcpy(output_file, input_file);
    output_file[strlen(output_file) - 2] = '\0';
    strcat(output_file, ".o");

    // Generate the command to compile the input file
    sprintf(command, "gcc -c %s -o %s", input_file, output_file);

    // Compile the input file
    system(command);

    return 0;
}
