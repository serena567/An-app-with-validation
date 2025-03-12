document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript loaded!"); // 确保 JS 被正确加载

    const form = document.getElementById("pizzaForm");
    const zipField = document.getElementById("zipcodeField");
    const usResidentCheckbox = document.getElementById("usResident");
    const zipInput = document.getElementById("zipcode");
    const successMessage = document.getElementById("successMessage");

    // 监听 "Do you live in the United States?" 复选框变化
    usResidentCheckbox.addEventListener("change", function () {
        console.log("Checkbox changed: ", this.checked); // 调试信息
        if (this.checked) {
            zipField.style.display = "block";
            zipInput.setAttribute("required", "true");
        } else {
            zipField.style.display = "none";
            zipInput.removeAttribute("required");
            document.getElementById("zipError").textContent = "";
        }
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let valid = true;

        // 清空所有错误消息
        document.querySelectorAll(".error").forEach(e => e.textContent = "");
        const name = document.getElementById("name").value.trim();
        
        // 检查名字的长度是否小于 3
        if (name.length < 3) {
            document.getElementById("nameError").textContent = "Name must be at least 3 characters.";
            valid = false;
        }
        // 检查名字是否包含数字
        else if (/[\d]/.test(name)) {  // 正则表达式检查是否有数字
            document.getElementById("nameError").textContent = "Name cannot contain numbers.";
            valid = false;
        }


    

    // 其他验证...

    if (valid) {
        document.getElementById("successMessage").style.display = "block";
    }
});

        // Year of Birth 验证
        const birthYear = parseInt(document.getElementById("birthYear").value, 10);
        const currentYear = new Date().getFullYear();
        if (isNaN(birthYear) || birthYear < 1900 || birthYear >= currentYear) {
            document.getElementById("yearError").
            valid = false;
        }

        // Zipcode 验证（仅当 US Resident 选中时）
        if (usResidentCheckbox.checked) {
            const zip = document.getElementById("zipcode").value.trim();
            if (!/^\d{5}$/.test(zip)) {
                document.getElementById("zipError")
            }
        }

        // Password 验证
        const password = document.getElementById("password").value;
        console.log("Password entered:", password); // Check entered password

        // Check password length and that it contains uppercase, lowercase, and digits
        if (password.length < 8) {
            document.getElementById("passwordError").
            valid = false;
        }

        // 获取表单元素
const pizzaForm = document.getElementById('pizzaForm');

// 添加提交事件监听器
pizzaForm.addEventListener('submit', function(event) {
    event.preventDefault();  // 防止表单提交
    
    let valid = true;
    const pizzaRadioButtons = document.querySelectorAll('input[name="pizza"]:checked');  // 获取已选中的 radio 按钮
    
    // 检查是否至少选择一个 pizza 类型
    if (pizzaRadioButtons.length === 0) {
        document.getElementById('pizzaError').textContent = "You must select at least one pizza type.";
        valid = false;
    } else {
        document.getElementById('pizzaError').textContent = "";  // 清除错误信息
    }
    
    // 其他表单验证...
    
    if (valid) {
        document.getElementById('successMessage').style.display = 'block';  // 显示成功消息
    }
});


        // **所有验证通过，显示成功消息并清空表单**
        if (valid) {
            console.log("Form submitted successfully!"); // 调试信息
            successMessage.style.display = "block";
            form.reset();
            zipField.style.display = "none";
        } else {
            successMessage.style.display = "none";
        }
    });
