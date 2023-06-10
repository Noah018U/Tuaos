; This file contains the code for the register management system

section .data
    ; Define the registers
    reg0: dd 0
    reg1: dd 0
    reg2: dd 0
    reg3: dd 0
    reg4: dd 0
    reg5: dd 0
    reg6: dd 0
    reg7: dd 0
    reg8: dd 0
    reg9: dd 0
    reg10: dd 0
    reg11: dd 0
    reg12: dd 0
    reg13: dd 0
    reg14: dd 0
    reg15: dd 0

section .text
    global get_reg_value
    global set_reg_value

    ; Function to get the value of a register
    ; Input: register number (0-15)
    ; Output: value of the register
    get_reg_value:
        push ebp
        mov ebp, esp
        mov eax, [ebp+8]
        cmp eax, 0
        jl invalid_reg
        cmp eax, 15
        jg invalid_reg
        mov edx, eax
        shl edx, 2
        mov eax, [reg0 + edx]
        pop ebp
        ret

    ; Function to set the value of a register
    ; Input: register number (0-15), value to set
    set_reg_value:
        push ebp
        mov ebp, esp
        mov eax, [ebp+8]
        cmp eax, 0
        jl invalid_reg
        cmp eax, 15
        jg invalid_reg
        mov edx, eax
        shl edx, 2
        mov eax, [ebp+12]
        mov [reg0 + edx], eax
        pop ebp
        ret

    ; Function to handle invalid register numbers
    invalid_reg:
        pop ebp
        mov eax, -1
        ret
