import os

# Caminho para a pasta raiz do seu projeto React
root_dir = '/home/apollo/Documentos/projetos_javascript'
output_file = 'project_files_list.txt'

with open(output_file, 'w') as file:
    for root, dirs, files in os.walk(root_dir, topdown=True):
        # Verificar e pular a pasta node_modules
        dirs[:] = [d for d in dirs if d not in ['node_modules']]
        
        for name in files:
            # Gerar o caminho absoluto do arquivo
            file_path = os.path.join(root, name)
            # Escrever o caminho do arquivo no arquivo de texto
            file.write(file_path + '\n')

print(f'Lista de arquivos salvos em {output_file}')
