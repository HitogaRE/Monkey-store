<form name='frmIncNovidade' id='frmIncNovidade'  method='POST' action="javascript:incluirNovidade();" onSubmit="return validaNov();">
    <fieldset><legend>Novidade</legend>
        Titulo da Novidade:<input type='text' name='txtTitulo' id='txtTitulo' size='10'><br>
        Novidade<br>
            <textarea name='txtNovidade' id='txtNovidade' cols='90' rows='15'></textarea>
        </fieldset>
        <fieldset>
                <input type='submit' name='grv' id='grv' value='enviar' ><input type='reset' name='lmp' id='lmp' value='limpar'>
         </fieldset>
</form>
